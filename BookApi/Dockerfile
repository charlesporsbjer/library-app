# 1. Build Stage
FROM ://mcr.microsoft.com AS build
WORKDIR /src
COPY ["BookApi.csproj", "./"]
RUN dotnet restore "BookApi.csproj"
COPY . .
RUN dotnet publish "BookApi.csproj" -c Release -o /app/publish

# 2. Runtime Stage
FROM ://mcr.microsoft.com
WORKDIR /app
COPY --from=build /app/publish .

# Render uses the PORT environment variable
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "BookApi.dll"]
