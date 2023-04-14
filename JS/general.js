function validation()
{    
    var regExp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var regExp2 = /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+[.]+[a-zA-Z\d-]*$/;
    var regExp3 = /^[A-Za-zéàèçÇÉÈ ]+$/;
    var regExp4 = /.{6,}/;
    var regExp5 = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    let mdp = document.getElementById('userpwd');
    let mail = document.getElementById('useremail');
    let nom = document.getElementById('lastname');
    let prenom = document.getElementById('firstname');
    let pseudo = document.getElementById('username');
    let datenaiss = document.getElementById('birthdate');

    let mdpv = mdp.value;
    let mailv = mail.value;
    let nomv = nom.value;
    let prenomv = prenom.value;
    let pseudov = pseudo.value;
    let datenaissv = datenaiss.value;

    var validite = [false, false, false, false, false, false];

    /*
    Expressions régulières et validite:
    1 : Mot De Passe
    2 : Mail
    3 : Nom et Prenom
    4 : Pseudo
    5 : Date
    */
    
    function validerMDP()
    {
        if (!(regExp1.test(mdpv)))
        {
            //erreur
            validite[0] = false;
        }
        else
        {
            //tout va bien
            validite[0] = true;
        }
    }

    function validerMail()
    {
        if (!(regExp2.test(mailv)))
        {
            //erreur
            validite[1] = false;
        }
        else
        {
            //tout va bien
            validite[1] = true;
        }
    }

    function validerNom()
    {
        if (!(regExp3.test(nomv)))
        {
            //erreur
            validite[2] = false;
        }
        else
        {
            //tout va bien
            validite[2] = true;
        }
    }

    function validerPrenom()
    {
        if (!(regExp3.test(prenomv)))
        {
            //erreur
            validite[3] = false;
        }
        else
        {
            //tout va bien
            validite[3] = true;
        }
    }

    function validerPseudo()
    {
        if (!(regExp4.test(pseudov)))
        {
            //erreur
            validite[4] = false;
        }
        else
        {
            //tout va bien
            validite[4] = true;
        }
    }

    function validernaiss()
    {
        var naiss = new Date(datenaissv);
        var now = new Date();
        console.log(naiss.getFullYear());

        if (!(regExp5.test(datenaissv)))
        {
            //erreur
            validite[5] = false;
        }
        else if (now.getFullYear() < naiss.getFullYear())
        {
            //erreur
            validite[5] = false;
        }
        else if (isNaN(naiss))
        {
            //erreur
            validite[5] = false;
        }
        else
        {
            //tout va bien
            validite[5] = true;
        }
    }

    for (let i = 0; i < 7; i++)
    {
        if (validite[i] == true)
        {
            console.log("Succès de l'inscription");
        }
        else
        {
            console.log("Erreur lors de l'inscription");
        }
    }

        mdp.addEventListener("input", validerMDP);
        mail.addEventListener("input", validerMail);
        nom.addEventListener("input", validerNom);
        prenom.addEventListener("input", validerPrenom);
        pseudo.addEventListener("input", validerPseudo);
        datenaiss.addEventListener("input", validernaiss);
}

validation();
