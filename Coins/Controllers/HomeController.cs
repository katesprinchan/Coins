using Microsoft.AspNetCore.Mvc;
using Coins.Models;
using System.Diagnostics;
using System.Text.Json;

namespace Coins.Controllers
{
    public class HomeController : Controller
    {
        private readonly HttpClient _httpClient;
        public HomeController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IActionResult> Coins()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("https://www.agroprombank.com/site.coins/Coins/GetSeries");

            if (response.IsSuccessStatusCode)
            {
                string jsonResponse = await response.Content.ReadAsStringAsync();
                SeriesData seriesData = JsonSerializer.Deserialize<SeriesData>(jsonResponse);
                List<Series> series = seriesData!.Series;
                return View(series);
            }
            else
            {
                return RedirectToAction("Error");
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}