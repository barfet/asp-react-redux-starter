using JustNews.Models;
using JustNews.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace JustNews.Controllers
{
    [Route("api/[controller]")]
    public class GoogleNewsController : Controller
    {
        private readonly IGoogleNewsService _googleNewsService;

        public GoogleNewsController(IGoogleNewsService googleNewsService)
        {
            _googleNewsService = googleNewsService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> TopHeadlines(TopHeadlinesRequest data)
        {
            var articles = await _googleNewsService.GetTopHeadlines(data.country, data.category, data.q);

            if (articles.Any())
            {
                return Ok(articles);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
