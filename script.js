//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic News Webpage</title>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Set body background color
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.margin = "0";
      document.body.style.fontFamily = "Arial, sans-serif";

      // Create Header
      const header = document.createElement("header");
      header.className = "header";
      header.style.backgroundColor = "#011e29";
      header.style.color = "white";
      header.style.textAlign = "center";
      header.style.padding = "20px";
      header.innerHTML = "<h1>Today's News</h1>";
      document.body.appendChild(header);

      // Create Latest News Section
      const latestNewsSection = document.createElement("div");
      latestNewsSection.className = "latest-news-section";
      latestNewsSection.style.backgroundColor = "white";
      latestNewsSection.style.padding = "20px";
      latestNewsSection.style.margin = "20px auto";
      latestNewsSection.style.width = "80%";
      latestNewsSection.style.borderRadius = "10px";

      const latestNewsHeading = document.createElement("h2");
      latestNewsHeading.textContent = "Latest News";
      latestNewsSection.appendChild(latestNewsHeading);

      const newsList = document.createElement("ul");
      ["Breaking: Stock Market Hits Record High", 
       "Local: Community Park Renovation Completed", 
       "World: Leaders Gather for Climate Summit"].forEach(news => {
        const li = document.createElement("li");
        li.textContent = news;
        li.style.marginBottom = "10px";
        li.style.fontSize = "1.1rem";
        li.style.borderBottom = "1px solid #ccc";
        li.style.paddingBottom = "5px";
        newsList.appendChild(li);
      });

      latestNewsSection.appendChild(newsList);
      document.body.appendChild(latestNewsSection);

      // Create Pictorial News Section
      const pictorialNewsSection = document.createElement("div");
      pictorialNewsSection.className = "pictorial-news-section";
      pictorialNewsSection.style.backgroundColor = "white";
      pictorialNewsSection.style.padding = "20px";
      pictorialNewsSection.style.margin = "20px auto";
      pictorialNewsSection.style.width = "80%";
      pictorialNewsSection.style.borderRadius = "10px";
      pictorialNewsSection.style.textAlign = "center";

      const pictorialHeading = document.createElement("h2");
      pictorialHeading.textContent = "Pictorial News";
      pictorialNewsSection.appendChild(pictorialHeading);

      const images = [
        { src: "image_one.jpg", alt: "News Image 1", headline: "Headline 1", desc: "Description of the first pictorial news item." },
        { src: "image_two.jpg", alt: "News Image 2", headline: "Headline 2", desc: "Description of the second pictorial news item." },
        { src: "image_three.jpg", alt: "News Image 3", headline: "Headline 3", desc: "Description of the third pictorial news item." },
      ];

      images.forEach(image => {
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "10px";
        img.style.marginBottom = "15px";

        const headline = document.createElement("h3");
        headline.textContent = image.headline;

        const desc = document.createElement("p");
        desc.textContent = image.desc;
        desc.style.color = "#333";

        imgContainer.appendChild(img);
        imgContainer.appendChild(headline);
        imgContainer.appendChild(desc);
        pictorialNewsSection.appendChild(imgContainer);
      });

      document.body.appendChild(pictorialNewsSection);
    });
  </script>
</head>
<body>
</body>
</html>