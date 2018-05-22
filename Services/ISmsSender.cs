using System.Threading.Tasks;

namespace StudentWebSP.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
