using System;
using System.Collections.Generic;
using CustomerDetails;


namespace Repoistary1
{
    public interface ICustomerService
    {
        IEnumerable<Customer> GetCustomers();
        bool UpdateContent(string pass,string email);
        bool Insertdata(Customer customer);
        bool DeleteContent(string email);
         bool login(string email,string pass);
        string Getcontentbyid(string email);
        bool ChangeContent(string content,string email);
        bool DeleteContents(string email);
        bool UpdateMobile(int mobile, string email);
    }
}
