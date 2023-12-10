package Vika.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vika.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Анкеты
 */
@Entity(name = "IISVikaАнкеты")
@Table(schema = "public", name = "Анкеты")
public class Ankety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @Column(name = "СистемЛьгот")
    private Integer системльгот;

    @Column(name = "СистемПремир")
    private Integer системпремир;

    @Column(name = "СодержРабот")
    private Integer содержработ;

    @Column(name = "СанитГигиен")
    private Integer санитгигиен;

    @Column(name = "ВзаимСРуковод")
    private Integer взаимсруковод;

    @Column(name = "ИнформСотруд")
    private Integer информсотруд;

    @Column(name = "РазмЗарабПлат")
    private Integer размзарабплат;

    @Column(name = "ОрганРабочПроц")
    private Integer органрабочпроц;

    @Column(name = "ОфицПризЗасл")
    private Integer офицприззасл;

    @Column(name = "ОценивРабот")
    private Integer оценивработ;

    @Column(name = "РезультРабот")
    private Integer результработ;

    @Column(name = "СистемАдаптац")
    private Integer системадаптац;

    @Column(name = "ИнтенсРаботы")
    private Integer интенсработы;

    @Column(name = "ВзаимCКоллег")
    private Integer взаимcколлег;

    @Column(name = "СистемОбучен")
    private Integer системобучен;

    @Column(name = "КарьерРоста")
    private Integer карьерроста;

    @Column(name = "Престиж")
    private Integer престиж;

    @Column(name = "СнабжНеобхИнстр")
    private Integer снабжнеобхинстр;

    @Column(name = "Предложения")
    private String предложения;

    @Column(name = "ОтносКатСотр")
    private String относкатсотр;

    @Column(name = "КакойСтаж")
    private String какойстаж;

    @Column(name = "ВозрастСотруд")
    private String возрастсотруд;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;


    public Ankety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполн() {
      return датазаполн;
    }

    public void setДатаЗаполн(Date датазаполн) {
      this.датазаполн = датазаполн;
    }

    public Integer getСистемЛьгот() {
      return системльгот;
    }

    public void setСистемЛьгот(Integer системльгот) {
      this.системльгот = системльгот;
    }

    public Integer getСистемПремир() {
      return системпремир;
    }

    public void setСистемПремир(Integer системпремир) {
      this.системпремир = системпремир;
    }

    public Integer getСодержРабот() {
      return содержработ;
    }

    public void setСодержРабот(Integer содержработ) {
      this.содержработ = содержработ;
    }

    public Integer getСанитГигиен() {
      return санитгигиен;
    }

    public void setСанитГигиен(Integer санитгигиен) {
      this.санитгигиен = санитгигиен;
    }

    public Integer getВзаимСРуковод() {
      return взаимсруковод;
    }

    public void setВзаимСРуковод(Integer взаимсруковод) {
      this.взаимсруковод = взаимсруковод;
    }

    public Integer getИнформСотруд() {
      return информсотруд;
    }

    public void setИнформСотруд(Integer информсотруд) {
      this.информсотруд = информсотруд;
    }

    public Integer getРазмЗарабПлат() {
      return размзарабплат;
    }

    public void setРазмЗарабПлат(Integer размзарабплат) {
      this.размзарабплат = размзарабплат;
    }

    public Integer getОрганРабочПроц() {
      return органрабочпроц;
    }

    public void setОрганРабочПроц(Integer органрабочпроц) {
      this.органрабочпроц = органрабочпроц;
    }

    public Integer getОфицПризЗасл() {
      return офицприззасл;
    }

    public void setОфицПризЗасл(Integer офицприззасл) {
      this.офицприззасл = офицприззасл;
    }

    public Integer getОценивРабот() {
      return оценивработ;
    }

    public void setОценивРабот(Integer оценивработ) {
      this.оценивработ = оценивработ;
    }

    public Integer getРезультРабот() {
      return результработ;
    }

    public void setРезультРабот(Integer результработ) {
      this.результработ = результработ;
    }

    public Integer getСистемАдаптац() {
      return системадаптац;
    }

    public void setСистемАдаптац(Integer системадаптац) {
      this.системадаптац = системадаптац;
    }

    public Integer getИнтенсРаботы() {
      return интенсработы;
    }

    public void setИнтенсРаботы(Integer интенсработы) {
      this.интенсработы = интенсработы;
    }

    public Integer getВзаимCКоллег() {
      return взаимcколлег;
    }

    public void setВзаимCКоллег(Integer взаимcколлег) {
      this.взаимcколлег = взаимcколлег;
    }

    public Integer getСистемОбучен() {
      return системобучен;
    }

    public void setСистемОбучен(Integer системобучен) {
      this.системобучен = системобучен;
    }

    public Integer getКарьерРоста() {
      return карьерроста;
    }

    public void setКарьерРоста(Integer карьерроста) {
      this.карьерроста = карьерроста;
    }

    public Integer getПрестиж() {
      return престиж;
    }

    public void setПрестиж(Integer престиж) {
      this.престиж = престиж;
    }

    public Integer getСнабжНеобхИнстр() {
      return снабжнеобхинстр;
    }

    public void setСнабжНеобхИнстр(Integer снабжнеобхинстр) {
      this.снабжнеобхинстр = снабжнеобхинстр;
    }

    public String getПредложения() {
      return предложения;
    }

    public void setПредложения(String предложения) {
      this.предложения = предложения;
    }

    public String getОтносКатСотр() {
      return относкатсотр;
    }

    public void setОтносКатСотр(String относкатсотр) {
      this.относкатсотр = относкатсотр;
    }

    public String getКакойСтаж() {
      return какойстаж;
    }

    public void setКакойСтаж(String какойстаж) {
      this.какойстаж = какойстаж;
    }

    public String getВозрастСотруд() {
      return возрастсотруд;
    }

    public void setВозрастСотруд(String возрастсотруд) {
      this.возрастсотруд = возрастсотруд;
    }


}