docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vika-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t vika-java/app ../../..
