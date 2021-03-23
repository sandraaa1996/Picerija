using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace nesto.Models{

[Table("Stolovi")]
    public class Stolovi
    {
        [Key]
        [Column("ID")]
        public int ID{get; set;}

        [Column("ImeRezervacije")]
        [MaxLength(255)]
        public string ImeRezervacije{get; set;}

         [Column("Kapacitet")]
        public int Kapacitet{get; set;}
        [Column("MaxKapacitet")]
        public int MaxKapacitet{get; set;}
        [Column("Pusac")]
        [MaxLength(255)]
        public string Pusac{get; set;}
        [Column("S")]
        public int S{get; set;}

        [JsonIgnore]
        public Picerija Picerija{get; set;}

    }
}