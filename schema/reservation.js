import * as  Yup from "yup"

export const reservationSchema = Yup.object({
    fullName: Yup.string().required("Bu alanı boş bırakamazsınız.")
    .min(3,"3'den daha az karakter girişi yapamazsınız.")
    .max(20, "20'den fazla karakter girişi yapamazsınız."),
    phoneNumber: Yup.string().min(10, "Geçersiz telefon numarası.").max(11,"Geçersiz telefon numarası")
    .required("Bu alanı boş bırakamazsınız."),
    email: Yup.string().required("Email alanı boş bırakılamaz.").email("Geçerli bir mail adresi giriniz."),
    persons:Yup.number().max(12,"En fazla 12 kişilik rezervasyon yaptırabilirsin.").required("Bu alanı boş bırakamazsınız."),
    date: Yup.date().min(new Date(), "Geçersiz tarih.").max(Yup.ref('maxDate'), 'En fazla 1 ay sonrasına kadar rezervasyon yapabilirsiniz')
    .required("Bu alan boş bırakılamaz."),
    maxDate: Yup.date().default(function() {
    return new Date(Date.now() + 31*24*60*60*1000) // şimdiki tarihe 31 gün ekliyoruz
}),


})

