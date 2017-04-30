using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using SignalR.Services;

[assembly: OwinStartup(typeof(Startup))]
namespace SignalR.Services
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}