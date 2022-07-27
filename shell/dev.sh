# shellcheck disable=SC2155
export DOCKERHOST=$(ifconfig | grep -A 1 docker0 | awk 'NR > 1 {print $2}')
cd container &&\
  docker compose up --build --remove-orphans --profile dev
