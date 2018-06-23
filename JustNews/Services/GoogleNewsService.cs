using JustNews.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace JustNews.Services
{
    public interface IGoogleNewsService
    {
        Task<IEnumerable<Article>> GetTopHeadlines(string country, TopHeadlinesCategory category, string q);
    }

    public class GoogleNewsService : IGoogleNewsService
    {
        private const string apiKey = "88f48a5357cf4999925db5854d2ed335";
        private readonly IHttpClientFactory _clientFactory;

        public TopHeadlinesResponse TopHeadlinesData { get; private set; }

        public GoogleNewsService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<IEnumerable<Article>> GetTopHeadlines(string country, TopHeadlinesCategory category, string q)
        {
            List<Article> result = new List<Article>();

            var request = new HttpRequestMessage(HttpMethod.Get, 
                $"https://newsapi.org/v2/top-headlines?country={country}&category={category}&q={q}&apiKey={apiKey}");

            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                TopHeadlinesData = await response.Content.ReadAsAsync<TopHeadlinesResponse>();

                foreach(Article article in TopHeadlinesData.articles)
                {
                    if(!String.IsNullOrEmpty(article.title) &&
                       !String.IsNullOrEmpty(article.urlToImage) &&
                       !String.IsNullOrEmpty(article.description))
                    {
                        result.Add(article);
                    }
                }
                return result;
            }
            else
            {
                return null;
            }
        }
    }
}
