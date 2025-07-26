
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface Contact {
  id: number;
  full_name: string;
  email_address: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = localStorage.getItem('admin_authenticated');
    if (checkAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Test database connection first
      const { data: testData, error: testError } = await supabase
        .from('Admin')
        .select('*')
        .limit(1);

      if (testError) {
        console.error('Database connection error:', testError);
        setError('Database connection failed. Please check your Supabase configuration.');
        setIsLoading(false);
        return;
      }

      // Now try to authenticate
      const { data, error } = await supabase
        .from('Admin')
        .select('*')
        .eq('email', email)
        .eq('password', password);

      if (error) {
        console.error('Auth error:', error);
        setError('Database error: ' + error.message);
        setIsLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setError('Invalid email or password');
        setIsLoading(false);
        return;
      }

      localStorage.setItem('admin_authenticated', 'true');
      setIsAuthenticated(true);
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Login failed: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-300">Access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Logging in...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <i className="ri-login-box-line mr-2"></i>
                Login
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('Contact')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Failed to fetch contacts');
        console.error('Error:', error);
      } else {
        setContacts(data || []);
      }
    } catch (err) {
      setError('Error loading contacts');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const { error } = await supabase
        .from('Contact')
        .delete()
        .eq('id', id);

      if (error) {
        alert('Failed to delete contact');
      } else {
        setContacts(contacts.filter((contact) => contact.id !== id));
      }
    } catch (err) {
      alert('Error deleting contact');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-300">Contact Form Management</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-logout-box-line mr-2"></i>
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Contacts</p>
                <p className="text-2xl font-bold text-white">{contacts.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-contacts-line text-blue-400 text-xl"></i>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Today's Messages</p>
                <p className="text-2xl font-bold text-white">
                  {contacts.filter((c) => new Date(c.created_at).toDateString() === new Date().toDateString()).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-message-line text-green-400 text-xl"></i>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">This Week</p>
                <p className="text-2xl font-bold text-white">
                  {contacts.filter((c) => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return new Date(c.created_at) > weekAgo;
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-calendar-line text-purple-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-semibold text-white">Contact Messages</h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <i className="ri-loader-4-line animate-spin text-white text-2xl"></i>
              <p className="text-gray-300 mt-2">Loading contacts...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-400">
              <i className="ri-error-warning-line text-2xl mb-2"></i>
              <p>{error}</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <i className="ri-inbox-line text-4xl mb-4"></i>
              <p>No contact messages yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{contact.full_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contact.email_address}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contact.subject}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300 max-w-xs truncate" title={contact.message}>
                          {contact.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{formatDate(contact.created_at)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
