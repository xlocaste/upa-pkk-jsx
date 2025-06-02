<?php

namespace App\Http\Requests\Mahasiswa;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama'=>['required','string','max:255'],
            'nim'=>['required','string','max:20','unique:mahasiswa,nim'],
            'jenis_kelamin'=>['required','in:Laki-laki,Perempuan'],
            'prodi'=>['required','string','max:100'],
            'status'=>['required','in:Aktif,Cuti,DO'],
            'semester'=>['nullable','integer','min:0'],
            'nomor_sk'=>['nullable','string','max:100'],
            'tanggal_sk'=>['nullable','date'],
            'keterangan'=>['nullable','string'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama.required'=>'Nama wajib diisi.',

            'nim.required'=>'NIM wajib diisi.',
            'nim.unique'=>'NIM ini sudah terdaftar.',
            'nim.max'=>'NIM maksimal 20 karakter.',

            'jenis_kelamin.required'=>'Jenis kelamin wajib dipilih.',
            'jenis_kelamin.in'=>'Jenis kelamin harus Laki-laki atau Perempuan.',

            'prodi.required'=>'Program studi wajib diisi.',

            'status.required'=>'Status wajib dipilih.',
            'status.in'=>'Status harus salah satu dari: aktif, cuti, atau do.',

            'semester.integer'=>'Semester harus berupa angka.',
            'semester.min'=>'Semester minimal adalah 0.',

            'tanggal_sk.date'=>'Tanggal SK harus berupa tanggal yang valid.',
        ];
    }
}
