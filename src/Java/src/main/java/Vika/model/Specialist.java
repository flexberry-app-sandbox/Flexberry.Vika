package Vika.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vika.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Специалист
 */
@Entity(name = "IISVikaСпециалист")
@Table(schema = "public", name = "Специалист")
public class Specialist {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Телефон")
    private String телефон;

    @Column(name = "ЭлектрПочта")
    private String электрпочта;


    public Specialist() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getТелефон() {
      return телефон;
    }

    public void setТелефон(String телефон) {
      this.телефон = телефон;
    }

    public String getЭлектрПочта() {
      return электрпочта;
    }

    public void setЭлектрПочта(String электрпочта) {
      this.электрпочта = электрпочта;
    }


}