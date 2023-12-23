const removeTwitterAds = () => {
  // Find all span elements in the document
  const spans = document.querySelectorAll("span");

  // Loop through each span to find a match
  for (let span of spans) {
    if (span.innerHTML === "Ad") {
      // If the innerHTML matches, find the nearest article parent
      let parentArticle = span.closest("article");

      // Check if the article has the correct data-testid attribute
      if (parentArticle) {
        console.log("[twitter-ads-blocker-webext] Removing ad");
        parentArticle.style.display = "none";
      }
    }
  }
};

if (window.location.href.includes("twitter.com")) {
  console.log("[twitter-ads-blocker-webext] Extension is running");
  setInterval(removeTwitterAds, 10000);
}
