# 1. Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# copy csproj and restore dependencies
COPY ["BookApi.csproj", "./"]
RUN dotnet restore "BookApi.csproj"

# copy everything else and publish
COPY . .
RUN dotnet publish "BookApi.csproj" -c Release -o /app/publish /p:UseAppHost=false


# 2. Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .


# IMPORTANT: use Render's dynamic port
ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "BookApi.dll"]
