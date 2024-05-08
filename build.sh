#!/bin/bash

# Извлечь дату последнего изменения
#LAST_UPDATED=$(git log -1 --format="%cd" | cut -d' ' -f 1)
LAST_UPDATED=$(git log -1 --format="%ci")

# Создать JSON-файл
echo "{\"lastUpdated\": \"$LAST_UPDATED\"}" > public/last-updated.json
