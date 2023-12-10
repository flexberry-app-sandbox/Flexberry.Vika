docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vika/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vika/app ../..
