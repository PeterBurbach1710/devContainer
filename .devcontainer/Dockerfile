FROM node:20-slim

# Verhindere die Installation von npm und yarn
RUN corepack disable && \
    rm -rf /usr/local/lib/node_modules/npm && \
    rm -rf /usr/local/bin/npm && \
    rm -rf /usr/local/bin/npx && \
    rm -rf /usr/local/bin/yarn && \
    rm -rf /usr/local/bin/yarnpkg && \
    echo '{"type":"module"}' > /usr/local/lib/node_modules/package.json

# Installiere notwendige Pakete
RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Aktiviere PNPM
RUN corepack enable && \
    corepack prepare pnpm@latest --activate