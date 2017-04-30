using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalR.Services.Hubs
{
    [HubName("DefaultHub")]
    public class DefaultHub : Hub
    {
        public void DoSomething()
        {
            Clients.All.GetData("Data");
        }
    }
}