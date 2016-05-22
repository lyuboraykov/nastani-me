echo "Building..."
npm run bundle
echo "Copying to gh-pages"
cp -r www www1
git checkout gh-pages
yes | cp -r www1/* .
rm -rf www1/
echo "Done"
echo "To continue run git commit -a -m \"Your message here\""
echo "Then git push origin gh-pages"
echo "Check the result at http://lyuboraykov.github.io/nastani-me/"
