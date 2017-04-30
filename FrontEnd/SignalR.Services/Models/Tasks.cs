namespace SignalR.Services.Models
{
    public class Tasks
    {
        public Data data { get; set; }
    }

    public class Data
    {
        public string taskName { get; set; }
        public string taskOwner { get; set; }
    }
}