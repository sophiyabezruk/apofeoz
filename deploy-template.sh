npm run build && \
rm -rf ../isuvorov-landing/docs && \
cp -R build ../isuvorov-landing/docs && \
cd ../isuvorov-landing && \
git add . && \
git commit -m "chore: release" && \
git push
