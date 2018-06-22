using JustNews.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace JustNews.Controllers
{
    [Route("api/[controller]")]
    public class GoogleNewsController : Controller
    {
        private readonly IHttpClientFactory _clientFactory;
        public TopHeadlinesResponse TopHeadlinesData { get; private set; }

        public GoogleNewsController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> TopHeadlines(TopHeadlinesRequest data)
        {
            var request = new HttpRequestMessage(HttpMethod.Get,  $"https://newsapi.org/v2/top-headlines?country={data.country}&category={data.category}&apiKey=88f48a5357cf4999925db5854d2ed335");

            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                TopHeadlinesData = await response.Content.ReadAsAsync<TopHeadlinesResponse>();
                return Ok(TopHeadlinesData.articles);
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
