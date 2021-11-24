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
        [HttpPost, Route("api/Customer/Registration/{FirstName}/{Lastname}/{mobile}/{email}/{pass}/{confirmpass}/{content}")]
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

        [HttpPatch, Route("api/Customer/Updatepassword")]
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
        [HttpGet, Route("api/Customer/UpdateMobile/{email}/{mobile}")]
        public bool UpdateMobile(int mobile, string email)
        {
            if (_customerService.UpdateMobile(mobile, email))
            {
                return true;
            }

            else
            {
                return false;
            }

        }
        [HttpPatch, Route("api/Customer/ChangeContent/{email}/{content}")]
        public bool ChangeContent(string content, string email)
        {
            if (_customerService.ChangeContent(content, email))
            {
                return true;
            }

            else
            {
                return false;
            }

        }
        [HttpPatch, Route("api/Customer/DeleteContent/{email}")]

        public bool DeleteContent( string email)
        {
            if (_customerService.DeleteContents( email))
            {
                return true;
            }

            else
            {
                return false;
            }

        }
        [HttpDelete, Route("api/Customer/Removedata/{email}")]
        public bool Deledata(string email)
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
