using Microsoft.AspNetCore.Mvc;
using InterviewTest.Model;
using Microsoft.Data.Sqlite;
using System.Collections.Generic;

namespace InterviewTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        public ListController()
        {
        }

        /*
         * List API methods goe here
         * */
        [HttpGet]
        public int Get()
        {
            var totalSum = 0;

            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"SELECT Name, Value FROM Employees";
                using (var reader = queryCmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var name = reader.GetString(0);

                        if (name.StartsWith("A") || name.StartsWith("B") || name.StartsWith("C"))
                        {
                            totalSum += reader.GetInt32(1);
                        }
                    }
                }
            }

            return totalSum;
        }
    }
}
