#!/bin/bash

LAST_UPDATED=$(git log -1 --format="%ci")

echo "{\"lastUpdated\": \"$LAST_UPDATED\"}" > public/last-updated.json