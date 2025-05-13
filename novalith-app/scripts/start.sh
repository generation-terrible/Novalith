#!/bin/sh

# Vérifier si le site vitrine est désactivé


echo "🔄 Génération du sitemap..."
./node_modules/.bin/next-sitemap --config next-sitemap.config.js
echo "✅ Sitemap généré"


# Démarrer le serveur
exec node server.js 