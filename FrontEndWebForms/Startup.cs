using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FrontEndWebForms.Startup))]
namespace FrontEndWebForms
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
