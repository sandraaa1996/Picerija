using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using nesto.Models;

namespace nesto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class PicerijaController : ControllerBase
    {
     
        public PicerijaContext Context{get;set;}
        public PicerijaController(PicerijaContext context)
        {
            Context=context;

        } 

        [Route("PreuzmiPicerije")]
        [HttpGet]
        public async Task<List<Picerija>> PreuzmiPicerije()
            {
                return await Context.Picerije.Include(p=>p.Stolovii).ToListAsync();
            }

        [Route("UpisiPiceriju")]
        [HttpPost]
        public async Task UpisiPiceriju([FromBody] Picerija picerija)
        {
            Context.Picerije.Add(picerija);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniPiceriju")]
        [HttpPut]
        public async Task IzmeniPiceriju([FromBody] Picerija picerija)
        {
            Context.Update<Picerija>(picerija);
             await Context.SaveChangesAsync();
        }
         [Route("IzbrisiPiceriju/{id}")]
        [HttpDelete]
        public async Task IzbrisiPiceriju(int id)
        {
            var picerija=await Context.Picerije.FindAsync(id);
            Context.Remove(picerija);
            await Context.SaveChangesAsync();
        }

            [Route("PreuzmiStolove")]
        [HttpGet]
        public async Task<List<Stolovi>> PreuzmiStolove()
            {
                return await Context.Stolovii.Include(p=>p.Picerija).ToListAsync();
            }


        [Route("UpisStolova/{idPicerije}")]
        [HttpPost]
        public async Task UpisiSto(int idPicerije,[FromBody] Stolovi sto)
        {
            var picerija=await Context.Picerije.FindAsync(idPicerije);
            sto.Picerija=picerija; 
            Context.Stolovii.Add(sto);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniSto")]
        [HttpPut]
        public async Task IzmeniSto([FromBody] Stolovi stoo)
        {
            Context.Update<Stolovi>(stoo);
             await Context.SaveChangesAsync();
        }

         [Route("IzbrisiSto/{id}")]
        [HttpDelete]
        public async Task IzbrisiSto(int id)
        {
            var stoo=await Context.Stolovii.FindAsync(id);
            Context.Remove(stoo);
            await Context.SaveChangesAsync();
        }
     
    
    }
}
