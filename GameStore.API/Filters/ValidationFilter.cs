using System;
using System.ComponentModel.DataAnnotations;

namespace GameStore.API.Filters;

public class ValidationFilter<T> : IEndpointFilter where T : class
{
    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        if (context.Arguments.FirstOrDefault(a => a is T) is not T dto)
        {
            return Results.BadRequest("Invalid request payload.");
        }

        var validationContext = new ValidationContext(dto);
        var validationResults = new List<ValidationResult>();
        var isValid = Validator.TryValidateObject(dto, validationContext, validationResults, true);

        if (!isValid)
        {
            return Results.BadRequest(validationResults);
        }

        return await next(context);   
    }
}
