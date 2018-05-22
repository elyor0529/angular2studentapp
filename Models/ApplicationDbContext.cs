using System;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Extensions.DependencyInjection;
using StudentWebSP.Models;

namespace StudentWebSP.Models
{
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
  {
    public static async void Initialize(IServiceProvider serviceProvider)
    {
      var context = serviceProvider.GetService<ApplicationDbContext>();

      await context.Database.EnsureCreatedAsync();

      context.Users.Add(new ApplicationUser
      {
        Email = "elyor.blog@gmail.com",
        UserName = "elyor.blog",
        PhoneNumber = "+998(97)-711-17-70",
        FirstName = "Elyor",
        LastName = "Latipov",
        Gender = "Male",
        DateOfBirth = new DateTime(1989, 5, 29)
      });
      await context.SaveChangesAsync();

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      // Customize the ASP.NET Identity model and override the defaults if needed.
      // For example, you can rename the ASP.NET Identity table names and more.
      // Add your customizations after calling base.OnModelCreating(builder);
      builder.Entity<ApplicationUser>().ToTable("Students");
    }

    public DbSet<ApplicationUser> ApplicationUser { get; set; }
  }
}
