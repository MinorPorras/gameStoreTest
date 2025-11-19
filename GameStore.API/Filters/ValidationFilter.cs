using MiniValidation;

namespace GameStore.API.Filters;

public class ValidationFilter<T> : IEndpointFilter where T : class
{
    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        if (context.Arguments.FirstOrDefault(a => a is T) is not T dto)
        {
            return Results.BadRequest("Invalid request payload.");
        }

        if(!MiniValidator.TryValidate(dto, out var errors))
        {
            return Results.BadRequest(errors);
        }

        return await next(context);   
    }
}
