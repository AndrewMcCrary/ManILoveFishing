FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MILF.Web/MILF.Web.csproj", "MILF.Web/"]
RUN dotnet restore "MILF.Web/MILF.Web.csproj"
COPY . .
WORKDIR "/src/MILF.Web"
RUN dotnet build "MILF.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MILF.Web.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MILF.Web.dll"]