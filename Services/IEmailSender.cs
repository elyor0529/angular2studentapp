using System.Threading.Tasks;

namespace StudentWebSP.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
