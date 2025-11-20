using MiniValidation;

namespace GameStore.API.Filters;

public class ValidationFilter<T> : IEndpointFilter where T : class
{
    private const string VALIDATION_ERROR_TYPE = "https://tools.ietf.org/html/rfc9110#section-15.5.1";
    private const string GENERIC_VALIDATION_ERROR_TITLE = "La solicitud contiene datos no válidos.";

    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        var Arguments = context.Arguments.OfType<T>().FirstOrDefault();
        if (Arguments is null)
        {
            return Results.Problem("Error interno: No se encontró el objeto a validar en los argumentos de la solicitud.");
        }

        if(!MiniValidator.TryValidate(Arguments, out var errors))
        {
            return Results.ValidationProblem(
                errors,
                statusCode: StatusCodes.Status400BadRequest,
                title: GENERIC_VALIDATION_ERROR_TITLE,
                type: VALIDATION_ERROR_TYPE
                );
        }

        return await next(context);   
    }
}
