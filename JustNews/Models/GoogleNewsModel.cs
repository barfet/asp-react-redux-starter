using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JustNews.Models
{
    public class TopHeadlinesRequest
    {
        public string country { get; set; }
        public TopHeadlinesCategory category { get; set; }
        public string Summary { get; set; }
    }

    public class TopHeadlinesResponse
    {
        public string status { get; set; }
        public int totalResults { get; set; }
        public IEnumerable<Article> articles { get; set; }
    }

    public enum TopHeadlinesCategory
    {
        business,
        entertainment,
        general,
        health,
        science,
        sports,
        technology
    }

    public class Article
    {
        public Source source { get; set; }
        public string author { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string url { get; set; }
        public string urlToImage { get; set; }
        public string publishedAt { get; set; }
    }

    public class Source
    {
        public string id { get; set; }
        public string name { get; set; }
    }
}
