# shellcheck disable=SC2155
export DOCKERHOST=$(ifconfig | grep -A 1 docker0 | awk 'NR > 1 {print $2}')
cd container &&
  docker compose --profile dev up --build --remove-orphans --detach
