using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNet.Identity.EntityFramework;

namespace StudentWebSP.Models
{
  // Add profile data for application users by adding properties to the ApplicationUser class
  public class ApplicationUser : IdentityUser
  {
    [StringLength(50)]
    public string FirstName { get; set; }

    [StringLength(50)]
    public string LastName { get; set; }

    [Column(TypeName = "datetime2")]
    public DateTime? DateOfBirth { get; set; }
     
    [StringLength(15)]
    public string Gender { get; set; }

    [StringLength(1024)]
    public string Address { get; set; }
      
  }
}
