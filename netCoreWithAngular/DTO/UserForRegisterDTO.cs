using System.ComponentModel.DataAnnotations;

namespace netCoreWithAngular.DTO
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4,ErrorMessage = "Minimum characters 4 max characters 8")]
        public string Password { get; set; }
    }
}
