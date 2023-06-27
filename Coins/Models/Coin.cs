namespace Coins.Models
{
    public class Coin
    {
        public string Name { get; set; }
        public int ParentId { get; set; }
        public string Message { get; set; }
        public string DeclareClient { get; set; }
        public int Price { get; set; }
        public List<SideCoins> SideCoins { get; set; }
    }
    public class SeriesData
    {
        public int FirstSeriesId { get; set; }
        public int LastSeriesId { get; set; }
        public int Count { get; set; }
        public List<Series> Series { get; set; }
    }
    public class Series
    {
        public string Name { get; set; }
        public int ParentId { get; set; }
        public string CastName { get; set; }
        public string Message { get; set; }
        public string DeclareClient { get; set; }
        public List<Coin> Coins { get; set; }
    }
    public class SideCoins
    {
        public int CoinId { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public int Type { get; set; }
    }
}
