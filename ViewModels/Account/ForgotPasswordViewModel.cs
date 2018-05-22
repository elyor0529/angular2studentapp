using System.ComponentModel.DataAnnotations;

namespace StudentWebSP.ViewModels.Account
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
