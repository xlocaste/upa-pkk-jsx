<?php

namespace App\Http\Requests\Inkubasi;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'nama_tenant' => ['required', 'string', 'max:255'],
            'bidang_fokus_tenant' => ['required', 'string', 'max:255'],
            'tahun_inkubasi_tenant' => ['required', 'max:' . date('Y')],
            'tahun_exit_tenant' => ['required', 'max:' . (date('Y') + 10)],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_tenant.required' => 'Nama tenant wajib diisi.',
            'nama_tenant.string' => 'Nama tenant harus berupa teks.',
            'nama_tenant.max' => 'Nama tenant maksimal 255 karakter.',

            'bidang_fokus_tenant.required' => 'Bidang fokus tenant wajib diisi.',
            'bidang_fokus_tenant.string' => 'Bidang fokus tenant harus berupa teks.',
            'bidang_fokus_tenant.max' => 'Bidang fokus tenant maksimal 255 karakter.',

            'tahun_inkubasi_tenant.required' => 'Tahun inkubasi tenant wajib diisi.',
            'tahun_inkubasi_tenant.max' => 'Tahun inkubasi tenant tidak boleh lebih dari ' . date('Y') . '.',

            'tahun_exit_tenant.required' => 'Tahun exit tenant wajib diisi.',
            'tahun_exit_tenant.max' => 'Tahun exit tenant tidak boleh lebih dari ' . (date('Y') + 10) . '.',
        ];
    }
}
