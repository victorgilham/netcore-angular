using System;
using AutoMapper;
using Microsoft.AspNetCore.Http;

namespace netCoreWithAngular.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int CalculateAge(this DateTime dateOfBirthTime)
        {
            var age = DateTime.Today.Year - dateOfBirthTime.Year;
            if (dateOfBirthTime.AddYears(age) > DateTime.Today) age--;
            return age;
        }
        public static void ResolveUsing<TSource, TDestination, TMember, TResult>(this IMemberConfigurationExpression<TSource, TDestination, TMember> member, Func<TSource, TResult> resolver) => member.MapFrom((src, dest) => resolver(src));
    }
}
