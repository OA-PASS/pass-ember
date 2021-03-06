import { Response } from 'miragejs';

export default function (server) {
  /**
   * Mock the response from fcrepo for creating a file
   */
  server.post('http://localhost:8080/fcrepo/rest/files', () => new Response(201, {
    Location: `https://pass.local/fcrepo/rest/files/6a/e3/c0/91/6ae3c091-e87e-4249-a744-${Math.ceil(Math.random() * 1000000)}`,
    'Content-Type': 'text/plain; charset=UTF-8'
  }));

  server.patch('http://pass.local/fcrepo/rest/files/**', () => new Response(204));
}
