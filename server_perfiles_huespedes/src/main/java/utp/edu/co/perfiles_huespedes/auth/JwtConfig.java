package utp.edu.co.perfiles_huespedes.auth;

public class JwtConfig {

	public static final String RSA_PRIVATE = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEogIBAAKCAQEAwdETzqLCMV6n7B+6QNyaGcjhEeZTj26d8QYOpZlJYobJLDi3\r\n" + 
			"R60gF4oosnvSldXo0pzHHVr8HhBVb4BNoijvtbeBKrqjCqnCK0ivnMq3POOn9pIG\r\n" + 
			"PPnwAo3b5Gg6UNjjPd+lTIFGdvKCv/UdOT59dOcjP5g4i46aTv6CXBj98AnXpgSY\r\n" + 
			"fbzZU65yZjHVl/RYOCVdT98lrUOytPer/GqsxLdm6nYYCceATBnGi3WvV8dsL4T1\r\n" + 
			"MaWDMVJ1RWgYSPu6T4w7XYe2UhNtDUN32J9ADrtvHfPWb4wFFqikuEgXoqeVOBna\r\n" + 
			"R3juIJ1AIZKWqjpUIF0aTvdZakLvv8HCCjAKAwIDAQABAoIBAHhWi1jKP46Nue9m\r\n" + 
			"x6sMDXYi/nOxsYIl6VTEMQXqxeCx1WhqkomjWYCkHJ6tONQla5iRFSQJ4O39sD45\r\n" + 
			"yHn9ts/57u4L0b2GJ3PefoL4bosUwq3afpsPiFDdqYEIoeSetYEuQiDdR1YFPt9W\r\n" + 
			"nl1zikuyU3Vh2wHzeaXAakoqjkihjvAtIxZsO3vCyuOQ8ZN3IBCWYKLhZ2OS9YbG\r\n" + 
			"l9Acu76JXF5BCw5aSj4e4QBu6IREWzqZ5zLR1Pqkc+lXfTzJjSSimNxf0LoDibx+\r\n" + 
			"5qCON+YW26tKOxsOkK48jQR1C+pCPAU2uZkENpcGq/VGrgUrg8H0ihhY0+VBzVt8\r\n" + 
			"Tho3G1kCgYEA6KTak8KMQB/jzRAlEe85ZsrbN78FZkc6Hxxx9Vtqky8GMsJkOUR2\r\n" + 
			"P5vHWHmNlgnGLaoVcfhWXBI1XWeYDOoviMf65tTf6hgmAuqVF9nVxXCQQcL6AIKK\r\n" + 
			"o67V5GqYkM0JJ7rwCt72Ps9jMk9bwJt5CvQ9dnTBuFdBk2iU9RKpnp8CgYEA1UZU\r\n" + 
			"lXjW72fuqnR7ZW50pZfamaujhWYpOj+H58Wxt6IuB8YRPtL5QjIy/dF77rryNHFb\r\n" + 
			"8qawma1Z8HpRuuCgaAYWdSknwZhTs02j+x+qmsiOByJ7A0WVOmTz9IV2zUUmgDch\r\n" + 
			"RiiSsUKCfgiN+a+yNliFAWR0lB6wsId06hE3rh0CgYAMcEP/gnddNldHr4VL4C6B\r\n" + 
			"gHcYE+6F+WjyIOM26xxXojwCmsIhDbgEzp9p65XWX89owZ9D6LM1WQPhapiGmD7S\r\n" + 
			"YV7Y2KjgK0pc/Y3bKJp1Y/9ShMo5HMGs3rww6kId+9hxd10+N42S7iOvnO6a7bUb\r\n" + 
			"ENP4cWWqJYAsEXtlXwoSoQKBgFXYIDWl1QW6FMPBbOWv5v28OL3/6yrHqzKJ3d85\r\n" + 
			"oMXkXpi8bbaW3sN5RzMI/dRipRjcxADQfWbt8rSr13fb8FTOln2EGj9/W7lhN+7d\r\n" + 
			"mSMCNMDEbTUs7dr6RYOXsPEAs3WKOzdtH1aACdxG/zaQNLBRQwADejUggUgczb9l\r\n" + 
			"PL81AoGAb8QyAxKsdHjLoJJLxEA9q0iGU+XfcGzWt1hfXCJIMupEAjvK4SC/KWUm\r\n" + 
			"I8o+DPwHC/frTLtdgwiR3mn9mf/LIYSj4KckZDlTGJtXGwucg9Xq16uP/AlvLNpM\r\n" + 
			"vg60aueFBwATjONBHfDfy4pLcLAZ2aoNDWdFGmx1NHVtxX/iHxY=\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLIC = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwdETzqLCMV6n7B+6QNya\r\n" + 
			"GcjhEeZTj26d8QYOpZlJYobJLDi3R60gF4oosnvSldXo0pzHHVr8HhBVb4BNoijv\r\n" + 
			"tbeBKrqjCqnCK0ivnMq3POOn9pIGPPnwAo3b5Gg6UNjjPd+lTIFGdvKCv/UdOT59\r\n" + 
			"dOcjP5g4i46aTv6CXBj98AnXpgSYfbzZU65yZjHVl/RYOCVdT98lrUOytPer/Gqs\r\n" + 
			"xLdm6nYYCceATBnGi3WvV8dsL4T1MaWDMVJ1RWgYSPu6T4w7XYe2UhNtDUN32J9A\r\n" + 
			"DrtvHfPWb4wFFqikuEgXoqeVOBnaR3juIJ1AIZKWqjpUIF0aTvdZakLvv8HCCjAK\r\n" + 
			"AwIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
	
}
