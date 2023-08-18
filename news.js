const getLatestNews = async () => {
  let url = new URL(
    `https://openapi.naver.com/v1/search/blog.json?query=%EB%A6%AC%EB%B7%B0&display=10&start=1&sort=sim`
  );
  let header = new Headers({
    "X-Naver-Client-Id": "DpmaiTFJxhh4Gd_4nkna",
    "X-Naver-Client-Secret": "oU494EN547",
  });

  let response = await fetch(url, { headers: header });

  // ajax,http,fetch
  let data = await response.json();
  console.log("this is data:", data);
};

getLatestNews();
