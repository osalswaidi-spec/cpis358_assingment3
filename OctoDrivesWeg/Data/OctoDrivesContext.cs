using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OctoDrivesWeg.Models;

namespace OctoDrivesWeg.Data
{
    public class OctoDrivesContext : DbContext
    {
        public OctoDrivesContext (DbContextOptions<OctoDrivesContext> options)
            : base(options)
        {
        }

        public DbSet<OctoDrivesWeg.Models.Booking> Booking { get; set; } = default!;
    }
}
