using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Repoistary1;
using CustomerDetails;


namespace Uland.Net2.Controllers
{
    
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        [HttpGet, Route("api/Customer/CustomerDetails")]
        public IEnumerable<Customer> GetCustomers()
        {
            return _customerService.GetCustomers();
        }
        [HttpGet, Route("api/Customer/Login/{email}/{pass}")]
        public bool  login(string email,string pass)
        {
            if (_customerService.login(email,pass))
            {
                return true;
            }

            else
            {
                return false;
            }
        }
        [HttpGet, Route("api/Customer/Registration/{FirstName}/{Lastname}/{mobile}/{email}/{pass}/{confirmpass}/{content}")]
        public bool insert(Customer customer)
        {
            if (_customerService.Insertdata(customer))
            {
                return true;
            }

            else
            {
                return false;
            }
        }

        [HttpGet, Route("api/Customer/Updatepassword/{email}/{pass}")]
        public bool PromoteToNextClass( string pass,string email)
        {
            if (_customerService.UpdateContent( pass, email))
            {
                return true;
            }

            else
            {
                return false;
            }

        }
        [HttpGet, Route("api/Customer/RemoveContent/{email}")]
        public bool DeleStudent(string email)
        {
            if (_customerService.DeleteContent(email))
            {
                return true ;
            }
            else
            {
                return false;
            }

        }
        [HttpGet, Route("api/Customer/getcontent/{email}")]
        public string Getcontentbyid(string email)
        {
            return _customerService.Getcontentbyid(email);
        }



    }
}
