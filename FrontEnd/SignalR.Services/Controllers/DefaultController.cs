using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SignalR.Services.Hubs;
using SignalR.Services.Models;

namespace SignalR.Services.Controllers
{
    public class DefaultController : ApiControllerWithHub<DefaultHub>
    {
        public HttpResponseMessage Post()
        {
            try
            {
                string data = Request.Content.ReadAsStringAsync().Result;
                var myTask = JsonConvert.DeserializeObject<Tasks>(data);

                //Save to database

                //Pull from db here 
                var myTasks = new List<Tasks> {myTask, myTask, myTask};

                Hub.Clients.All.sendData(JsonConvert.SerializeObject(myTasks));

                var response = new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.OK,
                };

                return response;
            }
            catch (Exception)
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.InternalServerError
                };
            }
        }
    }
}
