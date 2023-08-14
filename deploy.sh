#!/bin/bash
echo "Deploying to Firebase Hosting..."
cd RileyPortfolio
ng build --configuration=production
firebase deploy