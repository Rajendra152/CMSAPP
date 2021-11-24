using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using CustomerDetails;

namespace Repoistary1
{
    public class Customerservice : ICustomerService
    {
        string _connectionString = @"server=IM-RT-LP-706\SQLEXPRESS;database=mydatabase;integrated security = True;";
        private SqlConnection _connection;
        private SqlCommand _command;
        public Customerservice()
        {
            _connection = new SqlConnection(_connectionString);
        }
        public bool DeleteContent(string email)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"Delete from customer WHERE email = '"+email+"'", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();
                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }
            return isSuccess;

        }
        //Inserting data api
        public bool Insertdata(Customer customer)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"INSERT INTO customer(firstname,lastname,mobile,email,pass,confirmpass,content)  VALUES ('" + customer.FirstName + "','" + customer.Lastname + "','" + customer.mobile + "','" + customer.Email + "','" + customer.Pass + "','" + customer.confirmpass + "','" + customer.Content + "')", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }

            return isSuccess;

        }
        public bool UpdateContent(string pass, string email)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"UPDATE customer SET pass ='" + pass + "' WHERE email= '" + email + "'", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }
            return isSuccess;
        }
        public bool UpdateMobile(int  mobile, string email)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"UPDATE customer SET mobile ='" + mobile + "' WHERE email= '" + email + "'", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }
            return isSuccess;
        }
        public bool DeleteContents( string email)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"UPDATE customer SET content = NULL  WHERE email= '" + email + "'", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }
            return isSuccess;
        }
        public bool ChangeContent(string content, string email)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"UPDATE customer SET content ='" + content + "' WHERE email= '" + email + "'", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _command.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }
            return isSuccess;
        }
        public IEnumerable<Customer> GetCustomers()
        {
            List<Customer> _customers = new List<Customer>();

            try
            {
                using (_command = new SqlCommand($"SELECT * FROM customer ;", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    SqlDataReader reader = _command.ExecuteReader();

                    while (reader?.Read() ?? false)
                        _customers.Add(new Customer() { FirstName = reader.GetString(0), Lastname = reader.GetString(1), mobile= reader.GetInt32(2), Email = reader.GetString(3), Pass = reader.GetString(4), confirmpass = reader.GetString(5),Content = reader.GetString(6) });
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }

            return _customers;
        }
        public string  Getcontentbyid (string email)
        {
            string _content = "";
            try
            {
                using (_command = new SqlCommand($"SELECT content  FROM customer where email='"+email+"';", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();

                    _content = Convert.ToString(_command.ExecuteScalar());

                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }

            return _content;
        }
        public bool login(string email, string pass)
        {
            bool isSuccess = false;
            try
            {
                using (_command = new SqlCommand($"SELECT * FROM customer where email='" + email + "' ;", _connection))
                {
                    if (_connection.State == System.Data.ConnectionState.Closed)
                        _connection.Open();
                    {
                        if (_connection.State == System.Data.ConnectionState.Closed)
                            _connection.Open();
                        SqlDataReader Reader = _command.ExecuteReader();
                        while (Reader.Read())
                        {
                            if (pass.Equals(Reader[4]))
                            {
                                  isSuccess = true;
                            }
                        }

                    }
                }
            }

            catch (Exception ex)
            {
                throw new CustomerException(ex.Message, ex);
            }
            finally
            {
                if (_connection.State == System.Data.ConnectionState.Open)
                    _connection.Close();
            }

            return  isSuccess;
        }
    }
}
            